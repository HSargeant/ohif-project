
const CreateExam = () => {
    return (
        <div className="ExamForm">
            <form >
                {/* onSubmit={handleSubmit} */}
                <div className="formFunction">
                    <input type="reset" placeholder="RESET" />
                    {/* <input onclick="google.com" type="reset" value="CANCEL" /> */}
                    <a href="/"> CANCEL </a>
                </div>

                <label> Patient ID</label>
                <input type="text" placeholder="Patient ID..." />

                <label> Exam ID</label>
                <input type="text" placeholder="Exam ID..." />

                <div className="row2">
                    <label> Patient's Age</label>
                    <input type="int" placeholder="Age" />

                    <label> Patient's Sex </label>
                    <input type="select" placeholder="Sex" />

                    <label> Date </label>
                    <input type="date" placeholder="Date of Exam" />
                </div>

                <div className="row3">
                    <label> Brixia Score</label>
                    <input type="text" placeholder="Brixia Score..." />

                    <label> Patient's ZipCode </label>
                    <input type="text" placeholder="zip code" />

                </div>

                <div className="row4">
                    <label> Key Finding </label>
                    <textarea placeholder="Please note any key findings" />

                    <label> X-ray Image  </label>
                    <input accept="image/*" type="file" />
                </div>

                <input type="submit" value="Create Exam" />

            </form>
        </div >
    );
}

export default CreateExam