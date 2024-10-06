import { Layout, Tabs, Input, Row, Col, Image, Button } from "antd";
import React from 'react';
import * as CustomComponents from '../../components/MachineTranslate';
import { useDispatch, useSelector } from "react-redux";
import { chageMode } from "../../Redux/MainSlice";

export default function MachineTranslator() {
    const { selectedMode } = useSelector((state) => state.mainSlice);
    return (
        <Layout style={{flexDirection: "column", display: 'flex'}}>
            <CustomComponents.CustomTabs />
            <CustomComponents.LanguageBar />
            {/* <Component.TextTranslate /> */}
            
            {selectedMode === "text" && <CustomComponents.TextTranslate />}
            {selectedMode === "document" && <CustomComponents.DocTranlate />}
        </Layout>
        
    );
}