import Chartist from 'chartist'

const delays = 80
const durations = 500

export const dailySalesChart = {
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [[12, 17, 7, 17, 23, 18, 38], [20, 17, 17, 7, 3, 28, 18]]
    },
    options: {
        lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0
        }),
        low: 0,
        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
    // for animation
    animation: {
        draw: data => {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path
                            .clone()
                            .scale(1, 0)
                            .translate(0, data.chartRect.height())
                            .stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                })
            } else if (data.type === 'point') {
                data.element.animate({
                    opacity: {
                        begin: (data.index + 1) * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                })
            }
        }
    }
}

export const lineChart = {
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [[5, 9, 7, 8, 5, 3, 5, 4]]
    },
    options: {
        low: 0,
        showArea: true
    },
    // for animation
    animation: {
        draw: data => {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path
                            .clone()
                            .scale(1, 0)
                            .translate(0, data.chartRect.height())
                            .stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                })
            } else if (data.type === 'point') {
                data.element.animate({
                    opacity: {
                        begin: (data.index + 1) * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                })
            }
        }
    }
}

export const testChart = {
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]]
    },
    options: {
        lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0
        }),
        low: 0,
        fullWidth: true,
        // high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
    animation: {
        draw: data => {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 400 * data.index,
                        dur: 2000,
                        from: data.path
                            .clone()
                            .scale(1, 0)
                            .translate(0, data.chartRect.height())
                            .stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                })
            }
        }
    }
}

export const testChart2 = {
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        series: [[1, 5, 2, 5, 4, 3], [2, 3, 4, 8, 1, 2], [5, 4, 3, 2, 1, 0.5]]
    },
    options: {
        low: 0,
        fullWidth: true,
        showArea: true,
        showPoint: false,
        // high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
    animation: {
        draw: data => {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 400 * data.index,
                        dur: 2000,
                        from: data.path
                            .clone()
                            .scale(1, 0)
                            .translate(0, data.chartRect.height())
                            .stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                })
            }
        }
    }
}

// module.exports = {
//     dailySalesChart,
//     lineChart
// }
