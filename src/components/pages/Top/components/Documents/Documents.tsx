import styles from './Documents.module.scss'

export const Documents = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="https://github.com/fumi-sagawa/next-ts-template/blob/main/docs/overview.md">๐งโ๐ปๆฆ่ฆ</a>
      </li>
      <li>
        <a href="https://github.com/fumi-sagawa/next-ts-template/blob/main/docs/component-design.md">
          ๐งฉใณใณใใผใใณใ่จญ่จ
        </a>
      </li>
      <li>
        <a href="https://github.com/fumi-sagawa/next-ts-template/blob/main/docs/directory-structure.md">
          ๐ใใฃใฌใฏใใชๆงๆ
        </a>
      </li>
      <li>
        <a href="https://github.com/fumi-sagawa/next-ts-template/blob/main/docs/state-management.md">๐๏ธ็ถๆ็ฎก็</a>
      </li>
      <li>
        <a href="https://github.com/fumi-sagawa/next-ts-template/blob/main/docs/test.md">๐งชใในใ</a>
      </li>
      <li>
        <a href="https://github.com/fumi-sagawa/next-ts-template/blob/main/docs/scaffolding.md">
          ๐ถใใกใคใซ็ๆ(Scaffold)
        </a>
      </li>
    </ul>
  )
}
