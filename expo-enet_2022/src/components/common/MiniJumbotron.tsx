import { Component, ReactNode } from "react";
import { JumbotronProp } from "../../types/Jumbotron";

export default class MiniJumbotron extends Component<JumbotronProp, {}> {
    constructor(props: JumbotronProp) {
        super(props)

        this.state = {}
    }

    render(): ReactNode {

        const displayReverse = this.props.revDisplay
        const JumboTitle = this.props.header
        const JumboContent = this.props.body
        const JumboImgSource = this.props.img.source
        const JumboImgAlt = this.props.img.alt
        const JumboBtnCallback = this.props.btn.callback
        const JumboBtnLabel = this.props.btn.label

        return (
            <>
                <div className="col-md-6">
                    <div className="h-100 p-5 bg-light border rounded-3">
                        <h2></h2>
                        <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                        <button className="btn btn-outline-secondary" type="button">Example button</button>
                    </div>
                </div>
            </>
        )
    }
}