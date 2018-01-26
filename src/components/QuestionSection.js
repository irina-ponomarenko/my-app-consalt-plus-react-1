import React from 'react'
class QuestionSection extends React.Component {
    render() {
        return (
            <section className="questions">
                <div className="container">
                    <header className="sections-header left-header">
                        <h2>frequently asked questions</h2>
                    </header>
                    <div className="question-form answer-all">
                        <div className="wrapper-question">
                            <p>Lorem Ipsum is simply dummy text of the printing ?</p>
                            <p className="qustion-1">+</p>
                        </div>
                    </div>
                    <div className="question-form">
                        <div className="wrapper-question">
                            <p>Readable content of a page when looking at its layout ?</p>
                            <p className="qustion-1">+</p>
                        </div>
                    </div>
                    <div className="question-form">
                        <div className="wrapper-question answer">
                            <div className="wrapper-answer-1">
                                <p>Suspendisse mattis leo non neque bibendum semper ?</p>
                                <p className="qustion-1">-</p>
                            </div>
                            <div className="negative">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                    </div>
                    <div className="question-form">
                        <div className="wrapper-question">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</p>
                            <p className="qustion-1">+</p>
                        </div>
                    </div>
                    <div className="question-form">
                        <div className="wrapper-question">
                            <p>Mauris dictum purus ac dui efficitur, sed interdum ligula blandit ?</p>
                            <p className="qustion-1">+</p>
                        </div>
                    </div>
                    <div className="question-form">
                        <div className="wrapper-question">
                            <p>Phasellus eget erat aliquet, egestas odio eget, laoreet augue ?</p>
                            <p className="qustion-1">+</p>
                        </div>
                    </div>
                    <div className="question-form">
                        <div className="wrapper-question">
                            <p>Cras pharetra velit eu pretium viverra. ?</p>
                            <p className="qustion-1">+</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}
export default QuestionSection;