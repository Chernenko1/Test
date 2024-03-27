import { ChangeEvent } from 'react'

interface ISectionList {
  option: { value: string; name: string }[]
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const SectionList = ({ option, onChange }: ISectionList) => {
  return (
    <select onChange={onChange}>
      {option.map(({ value, name }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  )
}
