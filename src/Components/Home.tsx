const Home: React.FC = () => {
  const coreHooks = [
    "useState",
    "useEffect",
    "useContext",
    "useRef"
  ];

  const additionalHooks = [
    "useMemo",
    "useCallback",
    "useReducer"
  ];

  const advancedHooks = [
    "useTransition",
    "useLayoutEffect",
    "useImperativeHandle",
    "useDebugValue",
    "useId",
    "useDeferredValue"
  ];

  const routerHooks = [
    "useNavigate",
    "useParams",
    "useLocation",
    "useMatch",
    "useResolvedPath",
    "useSearchParams"
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>🪝 React Hooks</h2>

      <h3>🔥 Core Hooks</h3>
      <ul>
        {coreHooks.map((hook) => (
          <li key={hook}>{hook}</li>
        ))}
      </ul>

      <h3>⚙️ Additional Hooks</h3>
      <ul>
        {additionalHooks.map((hook) => (
          <li key={hook}>{hook}</li>
        ))}
      </ul>

      <h3>🚀 Advanced Hooks</h3>
      <ul>
        {advancedHooks.map((hook) => (
          <li key={hook}>{hook}</li>
        ))}
      </ul>

      <h3>🌐 React Router Hooks</h3>
      <ul>
        {routerHooks.map((hook) => (
          <li key={hook}>{hook}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;