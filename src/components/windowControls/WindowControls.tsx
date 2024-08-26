import { IoClose, IoRemoveOutline } from "react-icons/io5";
import { TbArrowsDiagonal } from "react-icons/tb";

export default function WindowControls() {
    return (
        <div className="window-controls flex gap-1 justify-self-end">
            <span className="btn_window-controls">
                <IoRemoveOutline />
            </span>
            <span className="btn_window-controls">
                <TbArrowsDiagonal />
            </span>
            <span className="btn_window-controls">
                <IoClose />
            </span>
        </div>
    );
}
