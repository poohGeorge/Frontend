import { Layout, Tabs, Input, Row, Col, Image, Button, Popover, Radio, Select } from "antd";
import React from 'react';
import { SwapOutlined } from '@ant-design/icons';
import '../../assets/styles/machineTranslate.css'
import { useSelector, useDispatch } from "react-redux";
import { changeTargetLang, changeSourceLang, exchangeLang, changeRadioOption } from "../../Redux/MainSlice";
import { lang_data } from '../../utils/LanguageData'
import axios from "axios";


export default function LanguageBar() {
    const { sourceLang, targetLang, sourceRadioOption, targetRadioOption, sourceText, targetText } = useSelector((state) => state.mainSlice);
    const dispatch = useDispatch();

    const onSearch = (value) => {
        console.log('search:', value);
    };

    const onSelTarChange = (value) => {
        const flag = true
        dispatch(changeTargetLang({ lang: value, flag: true }))
    }

    const onSelSourChange = (value) => {
        const flag = true
        dispatch(changeSourceLang({ lang: value, flag: true }))
    }

    const onTargetChange = (e) => {
        dispatch(changeTargetLang({ lang: e.target.value, flag: false }))
    }

    const onSourceChange = (e) => {
        dispatch(changeSourceLang({ lang: e.target.value, flag: false }))
    }

    const TargetLanguageBar = () => {
        return (
            <Layout>
                <Radio.Group block options={targetRadioOption} defaultValue={targetLang} optionType="button" buttonStyle="solid" onChange={onTargetChange} />
                <Select
                    className="custom-select"
                    placeholder="Select language"
                    showSearch
                    style={{
                        fontSize: '16px',
                        fontFamily: 'Arial', // Set font family for input text
                    }}
                    optionFilterProp="label"
                    onChange={onSelTarChange}
                    onSearch={onSearch}
                    options={lang_data}
                />
            </Layout>

        );
    };

    const SourceLanguageBar = () => {
        return (
            <Layout>
                <Radio.Group block options={sourceRadioOption} defaultValue={sourceLang} optionType="button" buttonStyle="solid" onChange={onSourceChange} />
                <Select
                    className="custom-select"
                    placeholder="Select language"
                    showSearch
                    style={{
                        fontSize: '16px',
                        fontFamily: 'Arial', // Set font family for input text
                    }}
                    optionFilterProp="label"
                    onChange={onSelSourChange}
                    onSearch={onSearch}
                    options={lang_data}
                />
            </Layout>

        );
    };

    const exchange = async () => {
        console.log("sourceText", sourceText, "targetText", targetText);
        dispatch(exchangeLang());
    }

    return (
        <Layout className="top_div" style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
        }}>
            <Layout className="button_group">
                <Row style={{ width: "100%" }}>
                    <Col style={{ width: "40%" }}>
                        <SourceLanguageBar />
                    </Col>
                    <Col style={{
                        width: "20%",
                        justifyContent: "center",
                        display: "flex"
                    }}>
                        <Button icon={<SwapOutlined />} shape="circle" onClick={exchange}></Button>
                    </Col>
                    <Col style={{ width: "40%" }}>
                        <TargetLanguageBar />
                    </Col>
                </Row>
            </Layout>
        </Layout>
    )
}