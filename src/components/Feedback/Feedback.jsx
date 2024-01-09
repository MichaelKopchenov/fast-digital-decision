import { useState } from 'react';
import './Feedback.css';

export default function Feedback() {
    const [form, setForm] = useState({
        name: '',
        reason: 'consultation',
        hasError: false
    });

    function handleNameChange(event) {
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0
        }))
    };

    function handleDescriptionChange(event) {
        setForm((prev) => ({
            ...prev,
            reason: event.target.value,
            hasError: event.target.value.trim().length === 0
        }))

    };

    return (
        <div className='form'>
            <form className='form__content'>
                <label htmlFor="name" className='form__label'>
                    Имя
                </label>
                <input
                    type="text"
                    id="name"
                    value={form.name}
                    style={{
                        border: form.hasError ? '2px solid red' : null,
                        borderRadius: form.hasError ? '20px' : null
                    }}
                    onChange={handleNameChange}
                />
                <label htmlFor="reason" className='form__label'>
                    Причина обращения
                </label>
                <select id="reason" value={form.reason}>
                    <option value="partnership">
                        Сотрудничество
                    </option>
                    <option value="review">
                        Отзыв
                    </option>
                    <option value="consultation">
                        Консультация
                    </option>
                </select>
                <label htmlFor="text" className='form__label'>
                    Текст обращения
                </label>
                <textarea
                    type="text"
                    id="text"
                    style={{
                        border: form.hasError ? '2px solid red' : null,
                        borderRadius: form.hasError ? '20px' : null
                    }}
                    onChange={handleDescriptionChange}
                />
                <button disabled={form.hasError} className='form__button'>
                    Отправить
                </button>
            </form>
        </div>
    );
};