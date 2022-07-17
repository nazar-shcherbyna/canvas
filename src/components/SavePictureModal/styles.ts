import styled from '@emotion/styled'

export const SavePictureModalWrappSC = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 600px;
`

export const ImgWrappSC = styled.div`
    padding-top: 56.25%;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;

    & > img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
`

export const SavePictureSC = styled.div`

`