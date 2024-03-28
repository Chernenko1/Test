import { ChangeEvent } from 'react'
import style from './SectionList.module.css'

interface ISectionList {
  title: string
  option: { value: string; name: string }[]
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const SectionList = ({ option, title, onChange }: ISectionList) => {
  return (
    <div className={style.selectionContainer}>
      <p className={style.selectionTitle}>{title}</p>
      <select onChange={onChange}>
        {option.map(({ value, name }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}
