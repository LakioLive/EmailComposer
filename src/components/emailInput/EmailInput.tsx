import { useState, Dispatch, SetStateAction } from "react";

type EmailInputProps = {
    setToEmails: Dispatch<SetStateAction<string[]>>;
    setCcEmails: Dispatch<SetStateAction<string[]>>;
    setBccEmails: Dispatch<SetStateAction<string[]>>;
};

export default function EmailInput({
    setToEmails,
    setCcEmails,
    setBccEmails,
}: EmailInputProps) {
    const [toEmailsValue, setToEmailsValue] = useState<string>("");
    const [ccEmailsValue, setCcEmailsValue] = useState<string>("");
    const [BccEmailsValue, setBccEmailsValue] = useState<string>("");
    const [isCc, setIsCc] = useState<boolean>(false);
    const [isBcc, setIsBcc] = useState<boolean>(false);

    const handleEmailsChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setter: (emails: string[]) => void,
        setState: Dispatch<SetStateAction<string>>,
    ) => {
        setState(e.target.value);

        const emails = e.target.value
            .replace(/(\s*,\s*|\s+)/g, ",")
            .split(",")
            .map((email) => email.trim());
        setter(emails);
    };

    return (
        <div
            className={`email-input grid ${
                isCc || isBcc
                    ? "grid-cols-[45px_1fr]"
                    : "grid-cols-[45px_1fr_20px_20px]"
            } py-3 border-b-[1px]`}
        >
            <label htmlFor="email" className="text_email-input">
                To:
            </label>
            <input
                type="email"
                id="email"
                className=" outline-none"
                value={toEmailsValue}
                onChange={(e) =>
                    handleEmailsChange(e, setToEmails, setToEmailsValue)
                }
                required
                multiple
            />
            <label
                htmlFor="cc"
                className="text_email-input"
                onClick={() => setIsCc(!isCc)}
            >
                Cc{isCc && ":"}
            </label>
            {isCc && (
                <input
                    type="email"
                    id="cc"
                    className="w-full outline-none"
                    value={ccEmailsValue}
                    onChange={(e) =>
                        handleEmailsChange(e, setCcEmails, setCcEmailsValue)
                    }
                    multiple
                />
            )}
            <label
                htmlFor="bcc"
                className="text_email-input"
                onClick={() => setIsBcc(!isBcc)}
            >
                Bcc{isBcc && ":"}
            </label>
            {isBcc && (
                <input
                    type="email"
                    id="bcc"
                    className="w-full outline-none"
                    value={BccEmailsValue}
                    onChange={(e) =>
                        handleEmailsChange(e, setBccEmails, setBccEmailsValue)
                    }
                    multiple
                />
            )}
        </div>
    );
}
