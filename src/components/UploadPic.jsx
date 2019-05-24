import React from 'react'
import { FilePond, File, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import config from '../config/config'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import './uploadPic.less'

// Register the plugins
registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateType,
    FilePondPluginImageResize,
    FilePondPluginFileValidateSize,
    FilePondPluginImageTransform
)

class UploadPic extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            // Set initial files
            files: []
        }
    }

    handleInit = () => {
        console.log('FilePond instance has initialised', this.pond)
    }

    render() {
        const url = `${config.host}/api/upload`
        const server = {
            url,
            process: {
                headers: { Authorization: `Bearer ${window.localStorage.accessToken}` }
            }
        }
        return (
            <div className='clearfix'>
                <FilePond
                    // ref={ref => (this.pond = ref)}
                    allowMultiple
                    maxFileSize='10MB'
                    instantUpload={false} // 立即上传
                    maxFiles={9}
                    // imageResizeTargetWidth={1000}
                    // imageResizeTargetHeight={1000}
                    acceptedFileTypes={['image/jpeg']}
                    server={server}
                    oninit={() => this.handleInit()}
                    onupdatefiles={fileItems => {
                        // Set current file objects to this.state
                        this.setState({
                            files: fileItems.map(fileItem => fileItem.file)
                        })
                    }}
                >
                    {/* Update current files  */}
                    {this.state.files.map(file => (
                        <File key={file} src={file} origin='local' />
                    ))}
                </FilePond>
            </div>
        )
    }
}

export default UploadPic
