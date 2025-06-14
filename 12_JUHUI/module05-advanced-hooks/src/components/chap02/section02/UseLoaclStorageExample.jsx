/*
[useLocalStorage]
- 브라우저의 localStorage에 데이터를 저장하고, React 상태와 동기화하는 커스텀 hook이다.

기능
- 초기값을 localStorag에서 불러옴
- 상태 변경시 localStorage에도 반영
- 수동 초기화(삭제) 기능능
*/

"use client";

import React from "react";
import { useState, useEffect } from "react";

function useLocalStorage(key, initiaValue) {
  const [value, setValue] = useState(() => {
    // 브라우저 환경이 아니면 초기값 반환
    if (typeof window === "undefined") return initiaValue;
    // localStorage 에서 값을 가져옴
    const saved = localStorage.getItem(key);
    // 값이 있으면 JSON파싱하여 반환, 없으면 초기값 반환
    return saved ? JSON.parse(saved) : initiaValue;
  });

  useEffect(() => {
    // 상태가 변경될 때 localStorage에 저장
    localStorage.setItem(key, JSON.stringify(value)); // JSON 객체를 문자열로 변경하는 것임, parse는 반대
  }, [key, value]);

  // 상태 변경 함수와 상태 값을 배열로 반환
  return [value, setValue];
}

// 사용자 입력값 브라우저의 스토리지에 저장된다.
export default function UseLoaclStorageExample() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div>
      <h2>useLocalStorage Hook 예제</h2>
      <input
        type="text"
        placeholder="이름 입력"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>안녕하세요, {name}님</p>
    </div>
  );
}
