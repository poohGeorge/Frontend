import { Layout, Tabs, Input, Row, Col, Image, Button } from "antd";
import React from 'react';
import '../../assets/styles/machineTranslate.css';
import { useSelector, useDispatch } from "react-redux";
import { changeSourceText, changeTargetText } from "../../Redux/MainSlice";
import axios from "axios";
const { Header } = Layout;
const { TextArea } = Input;

export default function TextTranslate() {
    const { sourceLang, targetLang, sourceText, targetText, exchangeFlag } = useSelector((state) => state.mainSlice);
    const dispatch = useDispatch();

    const onChange = async (e) => {
            if(e.target.value)
                try {
                    const res = await axios.post("http://localhost:8000/machineTranslate/translate-text", {
                        text: e.target.value,
                        source_lang: sourceLang != "" ? sourceLang : 'en',
                        target_lang: targetLang != "" ? targetLang : 'en'
                    });
                    console.log("onchange", e.target.value, "sourceLang", sourceLang, "targetLang", targetLang);
                    // console.log("source", sourceText);
                    dispatch(changeTargetText({ source: e.target.value, target: res.data['translatedText'] }));
                } catch (err) {
                    console.error("Error:", err);
                }
            else {
                dispatch(changeTargetText({ source: "", target: "" }));
            }
    };

    return (
        <Layout className="top_div" style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
        }}>
            <Layout className="button_group">
                <Row style={{ backgroundColor: 'tranparent', width: "100%" }}>
                    <Col style={{
                        width: '50%',
                        justifyContent: 'end',
                        display: 'flex'
                    }}>
                        <TextArea
                            showCount
                            maxLength={100}
                            allowClear
                            placeholder="disable resize"
                            style={{
                                height: 120,
                                width: '100%',
                                resize: 'none'
                            }}
                            onChange={onChange}
                        />
                    </Col>
                    <Col style={{ width: '50%' }}>
                        <TextArea
                            showCount
                            maxLength={100}
                            value={sourceText != "" ? targetText : ""}
                            placeholder="disable resize"
                            style={{
                                marginLeft: 10,
                                height: 120,
                                width: '100%',
                                resize: 'none',
                            }}
                        />
                    </Col>
                </Row>
            </Layout>
        </Layout>
    )
};
