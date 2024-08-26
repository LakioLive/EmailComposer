import { Dispatch, SetStateAction } from "react";
import ReactQuill, { Quill } from "react-quill";
import * as Emoji from "quill-emoji";
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";
import "../../styles/quill.scss";

Quill.register("modules/emoji", Emoji);

const TOOLBAR_OPTIONS = [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["emoji", "link", "image", "video"],
    ["clean"],
];

type MessageInputProps = {
    messageValue: string;
    setMessageValue: Dispatch<SetStateAction<string>>;
};

export default function MessageInput({
    messageValue,
    setMessageValue,
}: MessageInputProps) {
    const onChangeTextArea = (content: string) => {
        setMessageValue(content);
    };

    return (
        <div className="message-input relative py-2">
            <ReactQuill
                className="pb-4"
                theme="snow"
                placeholder="Message"
                bounds={".message-input"}
                modules={{
                    toolbar: [...TOOLBAR_OPTIONS],
                    "emoji-toolbar": true,
                    "emoji-textarea": false,
                    "emoji-shortname": true,
                }}
                value={messageValue}
                onChange={onChangeTextArea}
            />
        </div>
    );
}
