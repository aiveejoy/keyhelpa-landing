import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Banner from './banner'
import Colors from 'common/Colors';
import AgentVideoThumbnail from 'assets/agent-video-thumbnail.png'
import HelpaVideoThumbnail from 'assets/helpa-video-thumbnail.png'

import { SvgIcon } from '@mui/material';
import { PlayArrow, PlayCircleFilled } from '@mui/icons-material';
import Data from './data'
class Guide extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'agent',
            accountType: null
        }
    }

    renderVideo() {
        const { theme } = this.state;

        return (
            <div style={{
                width: '100%',
                float: 'left',
                height: 500,
                // background: theme == 'agent' ? Colors.agentTextTitle : Colors.helpaTextTitle,
                backgroundImage: `url(${theme == 'agent' ? AgentVideoThumbnail : HelpaVideoThumbnail})`,
                alignItems: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% auto',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center'
            }}
                className="active-color-hover full-width-mobile video-player-holder"
                onClick={() => {
                    this.setState({
                        video: item
                    })
                }}
            >
                <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50px',
                    float: 'left',
                    background: theme == 'agent' ? Colors.agentGray : Colors.helpaPink,
                    alignItems: 'center',
                    alignContent: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }}
                >
                    <SvgIcon
                        component={PlayArrow}
                        style={{
                            color: Colors.white,
                            fontSize: 60
                        }}
                    />
                </div>
            </div>
        )
    }

    renderMenu() {
        const { theme } = this.state;
        return (
            <div style={{
                float: 'left',
                width: '100%'
            }}>
                <h1 style={{
                    textAlign: 'center',
                    marginTop: 25,
                    marginBottom: 25
                }}>
                    Agent Guides
                </h1>
                <div style={{
                    float: 'left',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap'
                }}>
                    {
                        Data.agent.map((item) => (
                            <div style={{
                                width: '30%',
                                float: 'left',
                                backgroundColor: Colors.white,
                                borderRadius: 12,
                                textAlign: 'center',
                                paddingTop: 10,
                                paddingBottom: 10,
                                paddingLeft: 20,
                                paddingRight: 20,
                                marginBottom: 25
                            }}
                            className="cursor-hover"
                            >
                                <SvgIcon
                                    component={item.icon}
                                    style={{
                                        fontSize: 60,
                                        color: theme == 'agent' ? Colors.agentDarkGray : Colors.helpaDarkPink
                                    }}
                                />
                                <p style={{
                                    color: theme == 'agent' ? Colors.agentDarkGray : Colors.helpaDarkPink
                                }}><b>{item.title}</b></p>
                                <p style={{
                                    color: theme == 'agent' ? Colors.agentTextTitle : Colors.helpaTextTitle
                                }}>
                                    {
                                        item.description
                                    }
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    render() {
        const { theme } = this.state;
        return (
            <div style={{
                width: '100%',
                float: 'left'
            }}>

                <Banner />
                <div style={{
                    backgroundColor: theme == 'agent' ? Colors.agentBackgroundColor : Colors.helpaHeaderBackground,
                    float: 'left',
                    width: '100%',
                    minHeight: '100vh'
                }}>
                    <div style={{
                        width: '50%',
                        float: 'left',
                        marginLeft: '25%',
                        marginRight: '25%',
                        paddingTop: 50,
                        paddingBottom: 50
                    }}>

                        <p style={{
                            color: theme == 'agent' ? Colors.agentTextTitle : Colors.helpaTextTitle
                        }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                        {
                            this.renderVideo()
                        }

                        {
                            this.renderMenu()
                        }
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({ state: state });
const mapDispatchToProps = (dispatch) => {
    const { actions } = require('reduxhandler');
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Guide));