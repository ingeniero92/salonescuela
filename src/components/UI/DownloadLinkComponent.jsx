import React from "react";
import { observer } from "mobx-react";
import FileSaver from "file-saver";

const DownloadLinkComponent = observer((props) => {

    const downloadFile = () => {

        let root = process.env.PUBLIC_URL;   
        if(props.media !== undefined) root = process.env.REACT_APP_CLIENT_URL;

        // eslint-disable-next-line
        let fileName = props.url.replace(/^.*[\\\/]/, ''); 
        if(props.fileName !== undefined) fileName = props.fileName;

        FileSaver.saveAs(
            root + props.url,
            fileName
        );
        
    }

    return(
        <span className="downloadLink link" onClick={downloadFile}>{props.text}</span>
    );
    
});

export default DownloadLinkComponent;