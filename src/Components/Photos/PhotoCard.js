import React, { Component, Fragment } from "react";
import classes from '../../css/Common.module.css';

export class PhotoCard extends Component {
    render() {
        const { id = "", title = "", url = "" , thumbnailUrl="" } =
          this.props.photos || {};
    
        return (
          <Fragment>
            <div className="col-sm-12 col-md-12">
                <div className={classes.photoBox}>
                    <div className={classes.photoHolder} key={Math.random()}>
                        {/* thumbnail image wrapped in a link */}
                        <a href={"#image_" + id}>
                            <img src={thumbnailUrl} className={classes.thumbnail} alt="thumbnail" />
                        </a>

                        {/* lightbox container hidden with CSS */}
                        <a href="#_" className={classes.lightbox} id={"image_" + id}>
                            <img src={url} alt="lightbox"/>
                            <div className={classes.photoDesc}>
                                <p>{title}</p>
                            </div>
                        </a>

                        <a href={"#image_" + id}>
                        <div className={classes.photoDesc}>
                            <p>{title.length > 30 ? title.substr(0, 30) + "..." : title}</p>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
          </Fragment>
        );
      }
}

export default PhotoCard;