import { Layout, Tabs, Input, Row, Col, Image, Button } from "antd";
import React from 'react';
import '../assets/styles/machineTranslate.css'
import drag_drop from '../assets/images/drag_and_drop.png'
import text_icon from '../assets/images/Translate_link_color_crop.svg.png'
import document_icon from '../assets/images/icons8-document-50.png'
const { Header } = Layout
const { TextArea } = Input

const TextTranslate = () => {
    return (
        <Layout>
                <Row style={{backgroundColor: 'tranparent'}}>
                    <Col style={{
                        width: '50%',
                        justifyContent: 'end',
                        display: 'flex'
                        }}>
                        <TextArea
                            showCount
                            maxLength={100}
                            placeholder="disable resize"
                            style={{
                                height: 120,
                                width: '50%',
                                resize: 'none'
                            }}
                        />
                    </Col>
                    <Col style={{width: '50%'}}>
                        <TextArea
                            showCount
                            maxLength={100}
                            placeholder="disable resize"
                            style={{
                                marginLeft: 10,
                                height: 120,
                                width: '50%',
                                resize: 'none',
                            }}
                        />
                    </Col>
                </Row>
            </Layout>
    )
};

export default TextTranslate