export function Form() {
    return(
        <form>
            <label> What is the name of the video? e.g. "Let Love Alone Speak"
                <input type="text"/>
            </label>
            <label> Who is the author of these teachings? e.g. "Rumi"
                <input type="text" />
            </label>
            <label> What tradition is this teaching in? e.g. "Christian Mystics"
                <input type="text" />
            </label>
            <button type="submit">
                Submit Form
            </button>
        </form>
    )
}