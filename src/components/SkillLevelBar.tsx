import { Tooltip } from "@mui/material"

type SkillLevelBarProps = {
    level: number
}


export function SkillLevelBar(props: SkillLevelBarProps) {

    return <div className="skill-level-bar">
        <div className="level-bar">
            <div className={`painted-bar level-${props.level}`}></div>
        </div>
        <ul className="legend">
            <li><Tooltip title="Started to learn - never developed anything relevant"><span>1</span></Tooltip></li>
            <li><Tooltip title="Learn the basics - developed something for personal use"><span>2</span></Tooltip></li>
            <li><Tooltip title="Intermediate Level - had used in professional projects"><span>3</span></Tooltip></li>
            <li><Tooltip title="Advanced Level - day by day use - fast paced delivery"><span>4</span></Tooltip></li>
        </ul>
    </div>

}