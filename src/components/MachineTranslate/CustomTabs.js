import { Layout, Tabs, Input, Row, Col, Image, Button } from "antd";
import React from 'react';
import '../../assets/styles/machineTranslate.css'
import drag_drop from '../../assets/images/drag_and_drop.png'
import text_icon from '../../assets/images/Translate_link_color_crop.svg.png'
import document_icon from '../../assets/images/icons8-document-50.png'
import { chageMode } from "../../Redux/MainSlice";
import { useDispatch, useSelector } from "react-redux";
const { Header } = Layout
const { TextArea } = Input

export default function CustomTabs() {
    const dispatch = useDispatch();
    return (
        <Layout className="top_div" style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'}}>
            <Layout className="button_group">
                <button className="button_icon button_size_1" onClick= {() => dispatch(chageMode("text"))}>
                    <img src={text_icon} width="20" height="20"/>
                    <p>&nbsp;&nbsp;Text</p>
                </button>
                <button className="button_icon button_size_2" onClick= {() => dispatch(chageMode("document"))}>
                    <img src={document_icon} width="20" height="20"/>
                    <p>&nbsp;Documents</p>
                </button>
            </Layout>
        </Layout>
    )
};
