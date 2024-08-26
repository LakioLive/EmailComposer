import { useState } from "react";
import WindowControls from "./windowControls/WindowControls";
import EmailInput from "./emailInput/EmailInput";
import TitleInput from "./subjectInput/SubjectInput";
import MessageInput from "./messageInput/MessageInput";
import ControlPanel from "./controlPanel/ControlPanel";

export default function App() {
    const [subjectValue, setSubjectValue] = useState<string>("");
    const [messageValue, setMessageValue] = useState<string>("");
    const [toEmails, setToEmails] = useState<string[]>([]);
    const [ccEmails, setCcEmails] = useState<string[]>([]);
    const [bccEmails, setBccEmails] = useState<string[]>([]);

    return (
        <div className="grid pt-4 lg:w-[40vw] md:w-[50vw] sm:w-[60vw] w-screen bg-white rounded-2xl shadow">
            <form action="#">
                <div className="grid px-2">
                    <WindowControls />
                </div>
                <div className="px-4">
                    <EmailInput
                        setToEmails={setToEmails}
                        setCcEmails={setCcEmails}
                        setBccEmails={setBccEmails}
                    />
                    <TitleInput
                        subjectValue={subjectValue}
                        setSubjectValue={setSubjectValue}
                    />
                    <MessageInput
                        messageValue={messageValue}
                        setMessageValue={setMessageValue}
                    />
                </div>
                <ControlPanel
                    toEmails={toEmails}
                    ccEmails={ccEmails}
                    bccEmails={bccEmails}
                    subjectValue={subjectValue}
                    messageValue={messageValue}
                />
            </form>
        </div>
    );
}
