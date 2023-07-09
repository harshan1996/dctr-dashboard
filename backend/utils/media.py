import librosa
import torch
import os
from transformers import Wav2Vec2ForCTC, Wav2Vec2Processor
import csv
import pandas as pd


class ASR_predict:
    def load_model(self, repo_name):
        self.model = Wav2Vec2ForCTC.from_pretrained(repo_name)
        self.processor = Wav2Vec2Processor.from_pretrained(repo_name)

    def generate_transcription(self, speech, sr=16000):
        if len(speech.shape) > 1:
            speech = speech[:, 0] + speech[:, 1]
        input_values = self.processor(
            speech, sampling_rate=sr, return_tensors="pt").input_values
        logits = self.model(input_values).logits
        predicted_ids = torch.argmax(logits, dim=-1)
        transcription = self.processor.decode(predicted_ids[0])
        return transcription

    def get_trans(self, file_path, sr=16000, split_time=5):
        speech, sr = librosa.load(file_path, sr=sr)
        length = librosa.get_duration(speech, sr)
        if length <= split_time:
            transcript = self.generate_transcription(speech, sr=sr)
        else:
            transcript = ''
            buffer = split_time * sr
            samples_total = len(speech)
            samples_wrote = 0
            counter = 1
            while samples_wrote < samples_total:
                if buffer > (samples_total - samples_wrote):
                    buffer = samples_total - samples_wrote
                block = speech[samples_wrote: (samples_wrote + buffer)]
                transcript += ' ' + self.generate_transcription(block, 16000)
                counter += 1
                samples_wrote += buffer
        return transcript


asr_obj = ASR_predict()
