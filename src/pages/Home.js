
import { Link } from "react-router-dom";
const HomePage = () => {
    return <div className={'home--page'}>
        <div className={'home--page__nav'}>
            <Link to={'/question_1'}>QuestionOne</Link>
            <Link to={'/question_2'}>QuestionTwo</Link>
        </div>
    </div>
}
export default HomePage;