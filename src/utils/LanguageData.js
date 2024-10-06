import React from "react"
const lang_data = [
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
    },
    {
        value: 'ja',
        label: 'Japanese',
    },
    {
        value: 'ru',
        label: 'Russia',
    }
]

const changeRadioOption = (radioOption, lang) => {
    const data = [];
    var i;
    if (lang == "") {
        for (i = 0; i < 3; i++) {
            data.push(radioOption[i]);
        }
    }
    else {
        const found = radioOption.find(item => item.value === lang);
        if (found) {
            radioOption.map(item => {
                data.push(item)
            });
        }
        else {
            const found = lang_data.find(item => item.value === lang);
            for (i = 0; i < 2; i++) {
                data.push(radioOption[i]);
            }
            data.push(found);
        }
        console.log("RadioData", data)
    }
    return data
}
export { lang_data, changeRadioOption }