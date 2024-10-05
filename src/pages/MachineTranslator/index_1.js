import { Layout, Tabs, Input, Row, Col, Image, Button } from "antd";
import React from 'react';
 import * as Component from '../../components'

export default function MachineTranslator() {
    return (
        <Layout style={{flexDirection: "column", display: 'flex'}}>
            <Component.CustomTabs />
            <Component.LanguageBar />
            
            {/* {mode === "text" && <TextTranslate />}
            {mode === "document" && <DocTranlate />} */}
        </Layout>
        
    );
}   