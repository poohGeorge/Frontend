import { createSlice } from "@reduxjs/toolkit";
import { lang_data, changeRadioOption } from "../utils/LanguageData";

const initialState = {
  selectedMode: "text",
  sourceLang: "",
  sourceText: "",
  targetLang: "",
  targetText: "",
  seletedState: false,
  exchangeFlag: false,
  sourceRadioOption: [
    {
      value: 'en',
      label: 'English',
    },
    {
      value: 'ko',
      label: 'Korean',
    },
    {
      value: 'zh',
      label: 'Chinese',
    }
  ],
  targetRadioOption: [
    {
      value: 'en',
      label: 'English',
    },
    {
      value: 'ko',
      label: 'Korean',
    },
    {
      value: 'zh',
      label: 'Chinese',
    }
  ]
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {

    chageMode: (state, { payload }) => {
      state.selectedMode = payload;
      state.seletedState = false;
      state.exchangeFlag = false;
    },

    changeSourceLang: (state, { payload }) => {
      const { lang, flag } = payload
      console.log("Redux", flag)
      state.seletedState = flag;
      if (state.seletedState) {
        state.sourceRadioOption = changeRadioOption(state.sourceRadioOption, lang);
      }
      state.sourceLang = lang;
      state.exchangeFlag = false;
    },

    changeSourceText: (state, { payload }) => {
      const { source, target } = payload;
      state.targetText = target;
      state.sourceText = source;
      state.exchangeFlag = false;
    },

    changeTargetText: (state, { payload }) => {
      const { source, target } = payload;
      state.targetText = target;
      state.sourceText = source;
      state.exchangeFlag = false;
    },

    changeTargetLang: (state, { payload }) => {
      const { lang, flag } = payload
      state.seletedState = flag;
      if (state.seletedState) {
        state.targetRadioOption = changeRadioOption(state.targetRadioOption, lang);
      }
      state.targetLang = lang;
      state.exchangeFlag = false;
    },

    exchangeLang: (state, { payload }) => {
      const lang = state.sourceLang;
      state.sourceLang = state.targetLang;
      state.targetLang = lang;
      state.sourceRadioOption = changeRadioOption(state.sourceRadioOption, state.sourceLang);
      state.targetRadioOption = changeRadioOption(state.targetRadioOption, state.targetLang);
      // const text = state.sourceText;
      // state.sourceText = state.targetText;
      // state.targetText = text;
      // state.seletedState = false;
      // state.exchangeFlag = true;
    },

  },
});

export const {
  chageMode,
  changeSourceLang,
  changeTargetLang,
  exchangeLang,
  changeSourceText,
  changeTargetText
} = mainSlice.actions;

export default mainSlice.reducer;
