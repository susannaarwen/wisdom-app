import { useFormik } from "formik";

interface FormState {
    title: string;
    author: string;
    tradition: string;
    url: string;
    thoughts: string;
    time: string;
}

export function Form() {

    const handleSubmit = (values: FormState): void => {
        console.log(values);
    };
    const formik = useFormik<FormState>({initialValues:{title:'', author: '', tradition:'not-specified', url: '', thoughts: '', time: '' }, onSubmit: handleSubmit})
    // ALSO:
    // could we have a suggested time that might be edited
    // but not be in the future
    // anyway thanks

    //formik?

    // the old school react way - to have a useState 

    return(
        // STEPS:
        // NEED TO CALL HANDLE SUBMIT IN THE FORM TAG -> ON SUBMIT -> HANDLE SUBMIT ETC.
        // NEED TO "CAPTURE THE TIME OF THE SUBMISSION"
        // NEED TO DISPLAY THE TIME BUT THAT IS STEP 3 I THINK
        <form onSubmit={formik.handleSubmit}>
            <div id="inputs">
                <label htmlFor="title"> What is the title of the video? e.g. "Let Love Alone Speak"</label>
                <input type="text" name="title" id="title" value={formik.values.title} onChange={formik.handleChange}/>
                <br />
                <label htmlFor="author"> Who is the author of these teachings? e.g. "Rumi"</label>
                <input type="text" name="author" id="author"/>
                <br />
                <label htmlFor="tradition"> What tradition is this teaching in? e.g. "Christian Mystics"</label>
                <select name="tradition" id="tradition" >
                    <option value="christan-mystics">Christian Mystics</option>
                    <option value="sufi">Sufi</option>
                    <option value="not-specified">Not Specified</option>
                    // add Taoism, Buddhism, Advaita etc. and not specified 
                    // could be an enum one day 
                </select>
                <br />
                <label htmlFor="url">What is the link to this video?</label>
                <input type="url" name="url" id="url" />
                <label htmlFor="thoughts">What were your thoughts on the video?</label>
                <input type="text" name="thoughts" id="thoughts"/>
                <br />
            </div>
                <div id="button">
                <button type="submit">
                    Submit Form
                </button>
            </div>
        </form>
    )
}
// think about adding validation - maybe
// might be good one to discuss with Liv later today - data validation - thank you

/*
TO DO
1. Add thoughts input
2. Move inputs outside of labels as per first example
3. Add names to input tags


*/

/*
BEST PRACTICE FOR A11Y IN FORMS
- NAME
- -> Also helps you to refer to form field in the code
- ID
- BECAUSE you need to collect your label to your form field
    - there is a prop on your label tag that is htmlfor
    - 




*/

// add value and on change to each input
// fill out inputs
// once I've connect form fields to formik
// fill out form, press submit, see values
// raise PR
// before I move onto next ticket
// EXERCISE !!!!
// ADD ANOTHER FORM FIELD AND GET IT WORKING
// PROVE TO MYSELF I CAN GET IT WORKING
// SO I UNDERSTAND IT
// ADD ANOTHER FIELD

// TWO DIRECTIONS
// BE HAPPY THAT I A FORM AND MAKE IT LOOK PRETTY
// OR HANDLE SUBMISSION