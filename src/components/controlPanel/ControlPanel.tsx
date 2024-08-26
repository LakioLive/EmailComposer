import { MouseEvent } from "react";
import { Tooltip } from "react-tooltip";
import { FaRegTrashCan } from "react-icons/fa6";

type ControlPanelProps = {
    toEmails: string[];
    ccEmails: string[];
    bccEmails: string[];
    subjectValue: string;
    messageValue: string;
};

export default function ControlPanel({
    toEmails,
    ccEmails,
    bccEmails,
    subjectValue,
    messageValue,
}: ControlPanelProps) {
    const handleSendEmail = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (subjectValue && messageValue && toEmails[0]) {
            const emailData = {
                from: "example@gmail.com",
                to: toEmails,
                cc: ccEmails.length ? ccEmails : [],
                bcc: bccEmails.length ? bccEmails : [],
                subject: subjectValue,
                message: messageValue,
            };

            console.log("Email data:", emailData);
        }

        // * If you have an api, you can use this code

        // try {
        //     const response = await fetch("/api/send-email", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(emailData),
        //     });

        //     if (response.ok) {
        //         console.log("Email sent successfully");
        //     } else {
        //         console.error("Failed to send email");
        //     }
        // } catch (error) {
        //     console.error("Error sending email:", error);
        // }
    };

    return (
        <div className="control-panel flex justify-between items-center p-5 bg-gray-100 rounded-b-2xl">
            <div className="flex items-center gap-2">
                <a
                    href="/"
                    className="btn_control-panel"
                    data-tooltip-id="first-tooltip_control-panel"
                    data-tooltip-content="Delete the letter"
                >
                    <FaRegTrashCan className="icon_control-panel" />
                </a>
                <Tooltip
                    id="first-tooltip_control-panel"
                    noArrow={true}
                    style={{ padding: "1px 7px" }}
                />
            </div>
            <div className="flex gap-2">
                <button
                    type="submit"
                    onClick={handleSendEmail}
                    className="px-5 py-2 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg"
                >
                    Send now
                </button>
            </div>
        </div>
    );
}
