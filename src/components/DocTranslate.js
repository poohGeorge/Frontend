import { Layout, Tabs, Input, Row, Col, Image, Button } from "antd";
import React from 'react';
import '../assets/styles/machineTranslate.css'
import drag_drop from '../assets/images/drag_and_drop.png'
import text_icon from '../assets/images/Translate_link_color_crop.svg.png'
import document_icon from '../assets/images/icons8-document-50.png'
const { Header } = Layout
const { TextArea } = Input

const DocTranlate = () => {
    return (
        <Layout style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <Row style={{backgroundColor: 'tranparent', border: '1px solid grey', padding: '3%', width: "75%", borderRadius: '2% / 5%'}}>
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

export default DocTranlate