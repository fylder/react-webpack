// use jsx to render html, do not modify simple.html

import BannerAnim from 'rc-banner-anim'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import React from 'react'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import toRenderProps from 'recompose/toRenderProps'
import './less/banner.less'

const WithWidth = toRenderProps(withWidth())
const { Element } = BannerAnim
const { BgElement } = Element

class Banner extends React.Component {
    render() {
        return (
            <WithWidth>
                {({ width }) => {
                    let stylesLay
                    if (isWidthUp('sm', width)) {
                        stylesLay = {
                            height: 'calc(100% - 64px)'
                        }
                    } else {
                        stylesLay = {
                            height: 'calc(100% - 56px)'
                        }
                    }
                    return (
                        <BannerAnim autoPlay autoPlaySpeed={3000} autoPlayEffect={false}>
                            <Element key='aaa' prefixCls='banner-user-elem' style={stylesLay}>
                                <BgElement
                                    key='bg'
                                    className='bg'
                                    style={{
                                        backgroundImage: 'url(http://fylder.me/img/header.jpg)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />
                                <QueueAnim name='QueueAnim'>
                                    <h1 key='h1'>Ant Motion Demo</h1>
                                    <p key='p'>Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
                                </QueueAnim>
                                <TweenOne
                                    animation={{
                                        y: 50,
                                        opacity: 0,
                                        type: 'from',
                                        delay: 200
                                    }}
                                    name='TweenOne'
                                >
                                    Ant Motion Demo.Ant Motion Demo
                                </TweenOne>
                            </Element>
                            {/* <Element key='bbb' prefixCls='banner-user-elem' style={stylesLay}>
                                <BgElement
                                    key='bg'
                                    className='bg'
                                    style={{
                                        backgroundImage:
                                            'url(https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />
                                <QueueAnim name='QueueAnim'>
                                    <h1 key='h1'>Ant Motion Demo</h1>
                                    <p key='p'>Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
                                </QueueAnim>
                                <TweenOne
                                    animation={{
                                        y: 50,
                                        opacity: 0,
                                        type: 'from',
                                        delay: 200
                                    }}
                                    name='TweenOne'
                                >
                                    Ant Motion Demo.Ant Motion Demo
                                </TweenOne>
                            </Element> */}
                        </BannerAnim>
                    )
                }}
            </WithWidth>
        )
    }
}

export default Banner
