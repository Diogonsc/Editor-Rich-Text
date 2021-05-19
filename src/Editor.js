import React, { useState } from 'react'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import ReactHtmlParser from 'react-html-parser'

const Editor = () => {

    const [value, setValue] = useState('')

    const handleonChange = (e, editor) => {
        const data = editor.getData();
        setValue(data)
    }

    return (
        <div className="container">
            <h1 style={{textAlign: 'center', paddingTop:'20px'}}>Editor Rich Text</h1>
            <CKEditor 
                editor={ClassicEditor}
                onChange={handleonChange}
            />
            <div>
                {ReactHtmlParser(value)}
            </div>
        </div>
    )

export default Editor
