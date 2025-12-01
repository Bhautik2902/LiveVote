import { useState } from "react";
import Button from '../components/Button';
import TextEntry from "../components/TextEntry.jsx";
import FormCard from "../components/FormCard.jsx";
import "../styles/PollCreatePage.css"
import {pollService} from "../service/PollService.js";

export default function CreatePollPage() {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState(["", ""]);
    const [error, setError] = useState("");
    const userId = "guest_user";

    const addOption = () => {
        setOptions([...options, ""]);
    };

    const updateOption = (index, value) => {
        const updated = [...options];
        updated[index] = value;
        setOptions(updated);
    };

    const handleSubmit = async () => {
        const filteredOptions = options.filter(opt => opt.trim() !== "");
        if (!question.trim()) {
            setError("Question cannot be empty.");
            return;
        }
        if (filteredOptions.length < 2) {
            setError("Please add at least two options.");
            return;
        }

        const payload = {
            question: question.trim(),
            options: filteredOptions,
            createdBy: userId,
            durationMin: 150
        };

        setError("");
        try {
            const { data } = await pollService.createPoll(payload);

            if (data.error) {
                setError(data.error);
                throw new Error(data.error);
            }

            // Success
            alert("Poll created successfully!");
            setQuestion("");
            setOptions(["", ""]);
            setError("");

        } catch (err) {
            if (err.response) {
                const message = err.response.data?.message || `Request failed with status ${err.response.status}`;
                setError(message);
            } else if (err.request) {
                setError("No response from server. Please try again.");
            } else {
                setError(err.message);
            }
        }

    };

    return (
        // <div className="poll-wrapper">
        //     <header className="poll-header">Create Poll</header>
        //     <FormCard className="poll-card">
        //             {error && <div className="error-msg">{error}</div>}
        //
        //             <div className="flex flex-col gap-2">
        //                 <label className="poll-label">Question</label>
        //                 <TextEntry
        //                     id="question"
        //                     name="question"
        //                     type="text"
        //                     placeholder="Enter your poll question"
        //                     value={question}
        //                     required="required"
        //                     onChange={(e) => setQuestion(e.target.value)}
        //                 />
        //             </div>
        //
        //             <div className="space-y-3">
        //                 <label className="poll-label">Options</label>
        //                 {options.map((opt, idx) => (
        //                     <TextEntry
        //                         key={idx}
        //                         label={`Option ${idx + 1}`}
        //                         name={`option_${idx}`}
        //                         value={opt}
        //                         placeholder={`Enter option ${idx + 1}`}
        //                         required
        //                         onChange={(e) => updateOption(idx, e.target.value)}
        //                     />
        //                 ))}
        //
        //                 <Button variant="secondary" onClick={addOption} className="w-full">
        //                     + Add Option
        //                 </Button>
        //             </div>
        //
        //             <Button className="w-full" onClick={handleSubmit}>Create Poll</Button>
        //     </FormCard>
        // </div>

        <div className="poll-container">
            <div className="poll-header-box">
                <h1 className="poll-title">Create Your Poll</h1>
                <p className="poll-subtitle">Add a question and multiple options to get started</p>
            </div>

            <FormCard className="poll-card-new">
                {error && <div className="error-msg">{error}</div>}

                <div className="poll-section">
                    <label className="poll-label">Question</label>
                    <TextEntry
                        id="question"
                        name="question"
                        type="text"
                        placeholder="Enter your poll question"
                        required
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                </div>

                <div className="poll-section">
                    <label className="poll-label">Options</label>

                    <div className="options-list">
                        {options.map((opt, idx) => (
                            <div className="option-row" key={idx}>
                                <TextEntry
                                    label={`Option ${idx + 1}`}
                                    name={`option_${idx}`}
                                    value={opt}
                                    placeholder={`Enter option ${idx + 1}`}
                                    required
                                    onChange={(e) => updateOption(idx, e.target.value)}
                                />
                            </div>
                        ))}
                    </div>

                    <Button variant="secondary" onClick={addOption} className="w-full add-option-btn">
                        + Add Option
                    </Button>
                </div>

                <div className="submit-wrap">
                    <Button className="w-full submit-btn" onClick={handleSubmit}>
                        Create Poll
                    </Button>
                </div>
            </FormCard>
        </div>

    );
}
