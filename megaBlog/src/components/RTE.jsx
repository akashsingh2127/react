import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
import conf from '../conf/conf'
// we are using Controller component from react-hook-form to wrap the Editor component from tinymce so that we can use it as a controlled component in our form
export default function RTE({name,control,label,defaultValue=""}) {//here control is used for react hook form to control the form state. in simple terms it will handle the form state management. for example when we type something in the editor it will update the form state automatically and when we submit the form it will give us the value of the editor
  return (
    <div className='w-full'>
        {label && <label className='block text-sm font-medium text-gray-700 mb-1'>
            {label}
        </label>}
        <Controller 
        name ={name || "Content"}
        control={control}
        render={({field:{onChange}})=>(
            <Editor
            apiKey={conf.appwriteAPIkey}
            initialValue={defaultValue}
            init={{
                height: 500,
                menubar: true,
            plugins: [
                "image","advlist",
                "autolink","lists","link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
            
            />
        )}

        />
    </div>
  )
}

