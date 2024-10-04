import { Layout, Tabs, Input, Row, Col, Image, Button } from "antd";
import { TableOutlined } from '@ant-design/icons';
import React from 'react';
import '../../assets/styles/machineTranslate.css'
import drag_drop from '../../assets/images/drag_and_drop.png'
import text_icon from '../../assets/images/Translate_link_color_crop.svg.png'
import document_icon from '../../assets/images/icons8-document-50.png'
const { Content } = Layout;
const { TextArea } = Input

// export { default as DocTranslate } from "./DocTranslate";
// export { default as TextTranslate } from "./TextTranslate";

export default function MachineTranslator() {

    const onChange = (key) => {
        console.log(key);
    };

    const getInputTag = (key) => {
        if(key == "text") {
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
                                onChange={onChange}
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
                                onChange={onChange}
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
            );
        }
        else {
            return (
                <Layout style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <Row style={{backgroundColor: 'tranparent', border: '1px solid grey', padding: '3%', width: "70%", borderRadius: '2% / 5%'}}>
                        <Col style={{
                            width: '45%',
                            justifyContent: 'end',  
                            alignItems: 'center',
                            display: 'flex',
                            paddingLeft: '5%'
                            }}>
                            <Layout >
                                <Row style={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                                    <img src={drag_drop} width="60%" height="60%"/>
                                    <div className="google_font">Drag and Drop</div>
                                </Row>
                            </Layout>
                        </Col>
                        <Col style={{width: '10%'}}>
                            <hr className="hr_line"/>
                        </Col>
                        <Col style={{
                            width: '45%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            paddingRight: '5%'
                            }}>
                            <div className="google_font">Or choose a file</div>
                            <Button type="primary"  className="upload_button">Browse your files</Button>
                            <div className="explain_font">Supported file types:.docx,.PDF,.pptx,.xlsx</div>
                        </Col>
                    </Row>
                </Layout>
            )
        }
    }

    const getTab = (key) => {
        if(key == "Text") {
            return (
                <button className="button_icon">
                    <img src={text_icon} width="13" height="13"/>
                    <p>&nbsp;{key}</p>
                </button>
            );
        }
        else {
            return (
                <button className="button_icon">
                    <img src={document_icon} width="13" height="13"/>
                    <p>&nbsp;{key}</p>
                </button>
            );
        }
    }

    const items = [
        {
            key: '1',
            label: getTab("Text"),
            children: getInputTag("text"),
        },
        {
            key: '2',   
            label: getTab("Documents"),
            children: getInputTag("doc"),
        }
    ];



    return(
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} style={{marginLeft: '15%'}}/>
    )
}
