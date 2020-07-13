import id from '../src/utils/id';

export const testHeight = 600;
export const testWidth = 800;
export const multiplierOne = 10;
export const multiplierTwo = 20;

export const pointArrayContainerOne = [
    [multiplierOne, multiplierOne],
    [testWidth - multiplierOne, multiplierOne],
    [testWidth - multiplierOne, testHeight - multiplierOne],
    [multiplierOne, testHeight - multiplierOne],
    [multiplierOne, multiplierOne]
];

export const pointArrayContainerTwo = [
    [multiplierTwo, multiplierTwo],
    [testWidth - multiplierTwo, multiplierTwo],
    [testWidth - multiplierTwo, testHeight - multiplierTwo],
    [multiplierTwo, testHeight - multiplierTwo],
    [multiplierTwo, multiplierTwo]
];

export const testLines = [
    {
        id: id(),
        pointArrayContainer: pointArrayContainerOne
    },
    {
        id: id(),
        pointArrayContainer: pointArrayContainerTwo
    },
    {
        id: id(),
        pointArrayContainer: []
    }
];

export const makeVerticalLinesPointArrays = (height, width, distance) => {
    const pointArrays = [];
    for (let x = 0; x < width; x += distance) {
        const pointArrayContainer = [];
        for (let y = 0; y < height; y += distance) {
            pointArrayContainer.push([x, y]);
        }
        pointArrays.push(pointArrayContainer);
    }
    return pointArrays;
};

export const makeHorizontalLinesPointArrays = (height, width, distance) => {
    const pointArrays = [];
    for (let y = 0; y < height; y += distance) {
        const pointArrayContainer = [];
        for (let x = 0; x < width; x += distance) {
            pointArrayContainer.push([x, y]);
        }
        pointArrays.push(pointArrayContainer);
    }
    return pointArrays;
};

export const zShape = [
    [230, 111],
    [231, 111],
    [237, 111],
    [243, 111],
    [267, 111],
    [287, 111],
    [299, 111],
    [325, 111],
    [349, 111],
    [356, 111],
    [373, 111],
    [377, 111],
    [387, 111],
    [388, 111],
    [393, 111],
    [395, 111],
    [396, 111],
    [397, 111],
    [397, 111],
    [397, 111],
    [398, 111],
    [399, 111],
    [399, 111],
    [401, 111],
    [404, 111],
    [405, 111],
    [406, 111],
    [408, 111],
    [409, 111],
    [410, 111],
    [411, 112],
    [411, 113],
    [411, 114],
    [410, 115],
    [408, 117],
    [404, 120],
    [398, 127],
    [385, 141],
    [372, 161],
    [356, 185],
    [336, 214],
    [316, 244],
    [307, 258],
    [288, 284],
    [271, 308],
    [258, 327],
    [253, 335],
    [244, 348],
    [241, 353],
    [239, 357],
    [235, 363],
    [233, 367],
    [232, 370],
    [231, 372],
    [230, 373],
    [230, 374],
    [230, 374],
    [230, 374],
    [230, 374],
    [230, 374],
    [232, 374],
    [235, 374],
    [240, 373],
    [253, 372],
    [272, 371],
    [312, 370],
    [331, 370],
    [367, 368],
    [405, 368],
    [421, 368],
    [449, 367],
    [472, 367],
    [479, 367],
    [484, 367],
    [495, 367],
    [502, 367],
    [506, 367],
    [509, 366],
    [511, 366],
    [512, 366],
    [512, 366],
    [513, 366],
    [513, 365],
    [513, 364],
    [513, 360],
    [513, 360]
];

export const drawnRandomLines = [
    {
        id: '_65ud5g7qpxbkbm227w5',
        pointArrayContainer: [
            [188, 121],
            [186, 122],
            [131, 314]
        ]
    },
    {
        id: '_6rjbt9r7i4skbm229lu',
        pointArrayContainer: [
            [200, 442],
            [200, 442],
            [311, 322]
        ]
    },
    {
        id: '_5eysh6z4i3qkbm22o2q',
        pointArrayContainer: [
            [452, 480],
            [569, 154],
            [93, 411]
        ]
    },
    {
        id: '_jslu7l6qz9kbm22pwp_',
        pointArrayContainer: [
            [216, 69],
            [648, 462],
            [633, 514]
        ]
    },
    {
        id: '_7mfip99h9cikbm22r04',
        pointArrayContainer: [
            [129, 544],
            [514, 557]
        ]
    },
    {
        id: '_797n8d5stx8kbm22rt9',
        pointArrayContainer: [
            [738, 248],
            [737, 297]
        ]
    },
    {
        id: '_2by3t52p9dukbm22sqk',
        pointArrayContainer: [
            [753, 255],
            [753, 289],
            [753, 292]
        ]
    },
    {
        id: '_a618uy2tcmkbm22tmm_',
        pointArrayContainer: [
            [772, 247],
            [773, 299],
            [773, 299]
        ]
    },
    {
        id: '_79qossstgqokbm22wma',
        pointArrayContainer: [
            [111, 72],
            [337, 147]
        ]
    },
    {
        id: '_vboprs4i83kbm2303u_',
        pointArrayContainer: [
            [697, 51],
            [698, 162],
            [698, 162]
        ]
    }
];

export const circleLine = [
    [666.9437000537519, 294.5],
    [664.7204897663268, 329.83691561082105],
    [658.0859202583656, 364.6165469532092],
    [647.1446226543086, 398.29039846455044],
    [632.0691477533862, 430.327413390727],
    [613.097244800438, 460.22234886836793],
    [590.5281120382976, 487.50374390662205],
    [564.7176781727703, 511.7413546086208],
    [536.0729891643214, 532.5529393747466],
    [505.0457888701218, 549.6102870809998],
    [472.1253947735621, 562.6443931644869],
    [437.8309811552353, 571.4497019860739],
    [402.70339140439205, 575.8873485656079],
    [367.296608595608, 575.8873485656079],
    [332.16901884476476, 571.4497019860739],
    [297.874605226438, 562.6443931644869],
    [264.95421112987816, 549.6102870809998],
    [233.92701083567852, 532.5529393747466],
    [205.28232182722962, 511.7413546086208],
    [179.4718879617024, 487.50374390662216],
    [156.902755199562, 460.22234886836793],
    [137.93085224661382, 430.3274133907269],
    [122.85537734569141, 398.29039846455044],
    [111.91407974163445, 364.6165469532093],
    [105.27951023367325, 329.8369156108211],
    [103.05629994624815, 294.50000000000006],
    [105.27951023367325, 259.16308438917895],
    [111.9140797416344, 224.38345304679086],
    [122.85537734569141, 190.7096015354496],
    [137.93085224661382, 158.67258660927303],
    [156.90275519956188, 128.7776511316322],
    [179.4718879617023, 101.49625609337798],
    [205.28232182722968, 77.25864539137916],
    [233.92701083567866, 56.44706062525327],
    [264.95421112987833, 39.38971291900012],
    [297.8746052264379, 26.355606835513072],
    [332.16901884476476, 17.550298013926067],
    [367.29660859560806, 13.112651434392149],
    [402.7033914043918, 13.112651434392149],
    [437.8309811552352, 17.550298013926067],
    [472.12539477356205, 26.355606835513015],
    [505.04578887012156, 39.38971291900009],
    [536.0729891643215, 56.44706062525336],
    [564.7176781727703, 77.2586453913791],
    [590.5281120382975, 101.49625609337784],
    [613.097244800438, 128.77765113163204],
    [632.069147753386, 158.67258660927283],
    [647.1446226543086, 190.70960153544962],
    [658.0859202583656, 224.38345304679063],
    [664.7204897663268, 259.16308438917883],
    [666.9437000537519, 294.5]
];
