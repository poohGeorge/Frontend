import { Layout, Tabs, Input, Row, Col, Image, Button } from "antd";
import React from 'react';
import '../assets/styles/machineTranslate.css'
import drag_drop from '../assets/images/drag_and_drop.png'
import text_icon from '../assets/images/Translate_link_color_crop.svg.png'
import document_icon from '../assets/images/icons8-document-50.png'
const { Header } = Layout
const { TextArea } = Input

const LanguageBar = () => {
    return (
        <Layout className="top_div" style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'}}>
                <Layout className="button_group">
                    <Button color="default" variant="text" className="lang_button">
                        Detect language
                    </Button>
                    <Button color="default" variant="text" className="lang_button">
                        English
                    </Button>
                    <Button color="default" variant="text" className="lang_button">
                        Korean
                    </Button>
                    <Button color="default" variant="text" className="lang_button">
                        Russia
                    </Button>
                </Layout>
        </Layout>
    );
};
export default LanguageBar