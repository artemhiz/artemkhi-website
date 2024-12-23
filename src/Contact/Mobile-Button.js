export default function MobileContactButton({ isOpened, setOpening }) {
    return <button className={"for-mobile contact" + (isOpened ? " hidden" : "")} onClick={() => setOpening(true)}/>
}