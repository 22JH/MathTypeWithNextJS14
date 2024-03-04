## NextJS app router에서 MathType 사용하기

- NextJS 14.1.1
- tinymce-react 3.14.0
- mathtype-tinymce5 7.31.0

## TinyEditor을 사용한 이유

MathType을 사용하기 위해 공식적으로 지원하는 _CKEditor_, *Froala editor*을 모두 적용해봤으나
*CKEditor*의 경우 TypeError 발생, 공식 Github issue와 stack overflow를 서칭한 결과 wiris/mathtype-ckeditor5 에서 발생하는 에러, 아직 업데이트 되지 않음.
*Froala editor*의 경우 nextjs에서 렌더링이 되지 않음
최종적으로 TinyEditor을 사용했으나 tiny cdn의 plugin을 불러올 수 없었음(404 not found), 공식 사이트의 문제로 추측
이를 해결하기 위해 버전을 다운그레이드해 릴리즈가 잘 되어 있는 낮은 버전의 tinyeditor 사용
