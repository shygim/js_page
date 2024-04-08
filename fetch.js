import fetch from 'node-fetch';


fetch('https://api.thedogapi.com/v1/breeds')
.then(response => {
  // 응답이 성공적인지 확인합니다.
  if (!response.ok) {
    // 성공적이지 않으면, 오류를 던집니다.
    throw new Error('네트워크 응답이 올바르지 않습니다.');
  }
  // 응답을 JSON 형태로 파싱합니다.
  return response.json();
})
.then(async data => {
  // [1] 데이터 정상 확인 (파싱된 데이터를 출력)
  // console.log(data);
   // [2] 각 요소에 해당하는 모든 키의 값 출력 (각 요소의 name 만 출력)
  // const names = data.map(item => item.name);
  // console.log(names);
   // [3] 각 요소에서 id와 name을 추출하여 새로운 객체 반환
  // const idNamePairs = data.map(item => ({ id: item.id, name: item.name }));
  // console.log(idNamePairs);
  let images = []; // 이미지 URL을 저장할 배열을 초기화하고, 각 개 종의 이미지를 가져와서 배열에 추가합니다.
  for (const item of data) { // 각 강아지 종의 정보와 이미지 URL을 가져오기 위해 반복문을 사용합니다.
    const result = {
      id: item.id,     // 현재 강아지 종의 ID를 결과 객체에 추가합니다.
      name: item.name, // 현재 강아지 종의 이름을 결과 객체에 추가합니다.
      // 강아지 종의 이미지 URL을 가져오는 getImageFromImageId 함수를 호출하고, 해당 URL을 결과 객체에 추가합니다.
      // getImageFromImageId 함수는 강아지 종의 reference_image_id를 사용하여 이미지 정보를 가져옵니다.
      image_url: await getImageFromImageId(item.reference_image_id) // await 할 떄 한번 멈추기 때문에 순차적으로 실행됨 (동기 실행)
    }
    console.log(result);
    images.push(result); // images 배열에 강아지 종의 이미지 정보를 추가합니다.
  }
  console.log(images); // images 배열을 출력하여 이미지 정보를 확인합니다.
})


// 각 강아지 종의 이미지 주소를 가져오는 함수
async function getImageFromImageId(referenceImageId) {
try {
  // 강아지 종의 이미지 정보를 가져옵니다.
  const breedImageResponse = await fetch(`https://api.thedogapi.com/v1/images/${referenceImageId}`);
  const breedImageData = await breedImageResponse.json();

  // 강아지 종의 정보와 이미지 URL을 반환합니다.
  return breedImageData.url;
} catch (error) {
  // 오류가 발생하면 콘솔에 오류 메시지를 출력합니다.
  console.error('오류 발생:', error);
  return null;
}
}
