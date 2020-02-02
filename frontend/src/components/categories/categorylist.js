import React, { Component, Fragment} from 'react';
import Category from "./category";


export class Categories extends Component {
    render() {
        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        <Category
                            styleName="events-category"
                            img="../../../media/app_images/event_background.jpg"
                            name="Events" description=" those are events..."
                            link="/events"/>
                        <Category
                            styleName="shops-category"
                            img="../../../media/app_images/shop_background.jpg"
                            name="Shops"
                            description=" those are shops..."
                            link="/shops"/>
                        <Category
                            styleName="goals-category"
                            img="../../../media/app_images/goals_background.jpg"
                            name="Personal goals"
                            description=" those are personal goals..."
                            link="goals"/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Categories;