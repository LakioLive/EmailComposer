import { Dispatch, SetStateAction } from "react";

type TitleInputProps = {
    subjectValue: string;
    setSubjectValue: Dispatch<SetStateAction<string>>;
};

export default function TitleInput({
    subjectValue,
    setSubjectValue,
}: TitleInputProps) {
    return (
        <div className="subject-input flex items-center gap-2 py-3 border-b-[1px]">
            <input
                type="text"
                maxLength={80}
                className="w-full font-medium outline-none"
                placeholder="Subject"
                value={subjectValue}
                onChange={(e) => setSubjectValue(e.target.value)}
                required
            />
            <div className="h-fit px-1 bg-gray-200 rounded-md">
                <p className="text-gray-600 text-sm font-medium">
                    {80 - subjectValue.length}
                </p>
            </div>
        </div>
    );
}
