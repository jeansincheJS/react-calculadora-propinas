import React from 'react'

export default function TipPercentageForm() {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>
            <form>
                <div className="flex gap-2">
                    <label htmlFor="xd">label</label>
                    <input type="radio" name="tip" />
                </div>
            </form>
        </div>
    )
}
