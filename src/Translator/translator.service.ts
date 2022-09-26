import { Injectable } from '@nestjs/common';
import { TranslatorInputType, TranslatorOutputType } from './translator.controller.types';

'use strict'
const fs = require('fs');
let data = JSON.parse(fs.readFileSync('C:\\Users\\tkuis\\Documents\\Code\\my-site\\src\\Translator\\translator.table.json'));

@Injectable()
export class TranslatorService {
  

  translate(input: TranslatorInputType): TranslatorOutputType {
    let text = input.EnglishText;
    let chars = text.split('');
    let translatedText = '';

    chars.forEach(char => {
      if (char in data) {
        translatedText += data[char];
      }
      else {
        translatedText += char;
      }
      translatedText += '   ';
    })

    return {MorseText: translatedText.slice(0,-3)};
  }
}
