"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[9928],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8807:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const s={},i="CosmWasm + ICQ",o={unversionedId:"tutorials/cosmwasm_icq",id:"tutorials/cosmwasm_icq",title:"CosmWasm + ICQ",description:"This section contains a tutorial for writing smart contracts that utilize Interchain Queries Module.",source:"@site/docs/tutorials/cosmwasm_icq.md",sourceDirName:"tutorials",slug:"/tutorials/cosmwasm_icq",permalink:"/tutorials/cosmwasm_icq",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"CosmWasm + ICA",permalink:"/tutorials/cosmwasm_ica"},next:{title:"Integration tests",permalink:"/tutorials/integration_tests"}},u={},l=[{value:"Overview",id:"overview",level:2},{value:"The complete example",id:"the-complete-example",level:2},{value:"1. Install dependencies and import the libraries",id:"1-install-dependencies-and-import-the-libraries",level:2},{value:"2. Register an Interchain Query",id:"2-register-an-interchain-query",level:2},{value:"3. Get results from the registered Interchain Queries",id:"3-get-results-from-the-registered-interchain-queries",level:2},{value:"Get results from KV-queries",id:"get-results-from-kv-queries",level:3},{value:"Get results from TX-queries",id:"get-results-from-tx-queries",level:3},{value:"4. Manage registered Interchain Queries",id:"4-manage-registered-interchain-queries",level:2}],c={toc:l};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cosmwasm--icq"},"CosmWasm + ICQ"),(0,a.kt)("p",null,"This section contains a tutorial for writing smart contracts that utilize Interchain Queries Module."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"We are going to learn how to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install dependencies and import the libraries."),(0,a.kt)("li",{parentName:"ol"},"Register different Interchain Queries."),(0,a.kt)("li",{parentName:"ol"},"Get results from the registered Interchain Queries."),(0,a.kt)("li",{parentName:"ol"},"Manage the registered Interchain Queries.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," this section assumes that you have basic knowledge of CosmWasm and have some experience in writing smart\ncontracts. You can check out CosmWasm ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs/1.0/"},"docs"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/cosmwasm/writing-a-cosmwasm-contract-8fb946c3a516"},"blog posts")," for entry-level tutorials.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," before running any query creation transaction you need to top up your contract address. See ",(0,a.kt)("a",{parentName:"p",href:"/neutron/interchain-queries/overview"},"Interchain Queries Overview"),', "Query creation deposit" section.')),(0,a.kt)("h2",{id:"the-complete-example"},"The complete example"),(0,a.kt)("p",null,"In the snippets below some details might be omitted. Please check out the complete smart contract\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-sdk/tree/main/contracts/neutron_interchain_queries"},"example")," for a complete\nimplementation."),(0,a.kt)("h2",{id:"1-install-dependencies-and-import-the-libraries"},"1. Install dependencies and import the libraries"),(0,a.kt)("p",null,"In order to start using the Neutron ICQ module, you need to install some dependencies. Add the following\nlibraries to your dependencies section:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\ncosmwasm-std = { version = "1.0.0", features = ["staking"] }\n\n# Other standard dependencies...\n\n# This is a library that simplifies working with ICQ,\n# contains bindings for the Neutron ICQ module (messages, responses, etc.), some default Interchain Queries and provides\n# various helper functions.\nneutron-sdk = { path = "github.com/neutron-org/neutron/packages/neutron-sdk", default-features = false, version = "0.1.0" }\n')),(0,a.kt)("p",null,"Now you can import the libraries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use neutron_sdk::bindings::msg::NeutronMsg;\nuse neutron_sdk::bindings::query::{NeutronQuery, QueryRegisteredQueryResponse};\nuse neutron_sdk::interchain_queries::queries::{\n    query_balance, query_registered_query,\n};\nuse neutron_sdk::interchain_queries::{\n    new_register_balance_query_msg,\n    new_register_transfers_query_msg,\n};\nuse neutron_sdk::sudo::msg::SudoMsg;\nuse neutron_sdk::{NeutronError, NeutronResult};\n")),(0,a.kt)("h2",{id:"2-register-an-interchain-query"},"2. Register an Interchain Query"),(0,a.kt)("p",null,"Neutron allows a smart contract to register multiple interchain queries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum ExecuteMsg {\n    RegisterBalanceQuery {\n        connection_id: String,\n        update_period: u64,\n        addr: String,\n        denom: String,\n    },\n    RegisterTransfersQuery {\n        connection_id: String,\n        update_period: u64,\n        recipient: String,\n        min_height: Option<u128>,\n    }\n}\n\n#[cfg_attr(not(feature = "library"), entry_point)]\npub fn execute(\n    deps: DepsMut<NeutronQuery>,\n    env: Env,\n    _: MessageInfo,\n    msg: ExecuteMsg,\n) -> NeutronResult<Response<NeutronMsg>> {\n    match msg {\n        ExecuteMsg::RegisterBalanceQuery {\n            connection_id,\n            addr,\n            denom,\n            update_period,\n        } => register_balance_query(\n            deps,\n            env,\n            connection_id,\n            addr,\n            denom,\n            update_period,\n        ),\n        ExecuteMsg::RegisterTransfersQuery {\n            connection_id,\n            recipient,\n            update_period,\n            min_height,\n        } => register_transfers_query(\n            deps,\n            env,\n            connection_id,\n            recipient,\n            update_period,\n            min_height,\n        ),\n    }\n}\n\npub fn register_balance_query(\n    deps: DepsMut<NeutronQuery>,\n    env: Env,\n    connection_id: String,\n    addr: String,\n    denom: String,\n    update_period: u64,\n) -> NeutronResult<Response<NeutronMsg>> {\n    let msg = new_register_balance_query_msg(deps, env, connection_id, addr, denom, update_period)?;\n\n    Ok(Response::new().add_message(msg))\n}\n\npub fn register_transfers_query(\n    deps: DepsMut<NeutronQuery>,\n    env: Env,\n    connection_id: String,\n    recipient: String,\n    update_period: u64,\n    min_height: Option<u128>,\n) -> NeutronResult<Response<NeutronMsg>> {\n    let msg = new_register_transfers_query_msg(\n        deps,\n        env,\n        connection_id,\n        recipient,\n        update_period,\n        min_height,\n    )?;\n\n    Ok(Response::new().add_message(msg))\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," the ICQ module's ",(0,a.kt)("inlineCode",{parentName:"p"},"RegisterInterchainQueryMsg")," message ",(0,a.kt)("a",{parentName:"p",href:"/neutron/interchain-queries/messages#register-interchain-query"},"returns"),"\nan identifier of newly registered Interchain Query in response. So in a real world scenario you should implement a ",(0,a.kt)("inlineCode",{parentName:"p"},"reply")," handler in your contract\nto catch the identifier after the registration, so you'll be able to work with the registered query later.")),(0,a.kt)("p",null,"In the snippet above, we create the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," enum that contains two ",(0,a.kt)("inlineCode",{parentName:"p"},"Register")," messages for two different queries:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RegisterBalanceQuery")," - a simple KV-query to query a balance of an account on remote chain;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RegisterTransfersQuery")," - a TX-query to query transfers transactions to a some recipient on remote chain.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," in a real-world scenario you wouldn't want just anyone to be able to make your contract register interchain\nquery, so it might make sense to add ownership checks")),(0,a.kt)("p",null,"And implement simple handlers ",(0,a.kt)("inlineCode",{parentName:"p"},"register_balance_query")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"register_transfers_query")," for these messages. Each handler\nuses built-in helpers from Neutron-SDK to create necessary register messages: ",(0,a.kt)("inlineCode",{parentName:"p"},"new_register_balance_query_msg")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"new_register_transfers_query_msg"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"new_register_balance_query_msg")," - is a KV-query, therefore it creates an Interchain Query with necessary KV-keys to read\nfrom remote chain and build a full ",(0,a.kt)("inlineCode",{parentName:"li"},"Balance")," response from KV-values (you can see a full implementation of the helper in the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron-sdk/blob/a47bfac69667da57f8bf6ea81c9f16240e145c6d/packages/neutron-sdk/src/interchain_queries/register_queries.rs#L61"},"SDK source code"),"):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn new_register_balance_query_msg(...) -> NeutronResult<NeutronMsg> {\n    // convert bech32 encoded address to a bytes representation\n    let converted_addr_bytes = decode_and_convert(addr.as_str())?;\n\n    // creates a balance KV-key with necessary prefixes we want to read from the storage on remote chain\n    let balance_key = create_account_denom_balance_key(converted_addr_bytes, denom)?;\n\n    let kv_key = KVKey {\n        path: BANK_STORE_KEY.to_string(),\n        key: Binary(balance_key),\n    };\n\n    ...\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"new_register_transfers_query_msg")," - is a TX-query, therefore it creates an Interchain Query with necessary TX-filter\nto receive only required transactions from remote chain (you can see a full implementation of the helper in the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron-sdk/blob/a47bfac69667da57f8bf6ea81c9f16240e145c6d/packages/neutron-sdk/src/interchain_queries/register_queries.rs#L95"},"SDK source code"),"):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn new_register_transfers_query_msg(...) -> NeutronResult<NeutronMsg> {\n    // in this case the function creates filter to receive only transactions with transfer msg in it with a particular recipient\n    let mut query_data: Vec<TransactionFilterItem> = vec![TransactionFilterItem {\n        field: RECIPIENT_FIELD.to_string(),\n        op: TransactionFilterOp::Eq,\n        value: TransactionFilterValue::String(recipient),\n    }];\n\n    ...\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Neutron SDK is shipped with a lot of helpers to register different Interchain Queries (you can find a full list ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-sdk/blob/main/packages/neutron-sdk/src/interchain_queries/register_queries.rs"},"here"),").\nBut if you don't find some particular register query helper in the SDK, you can always implement your own using implementations from SDK as a reference.\nWe encourage you to open pull requests with your query implementations to make Neutron SDK better and better!")),(0,a.kt)("h2",{id:"3-get-results-from-the-registered-interchain-queries"},"3. Get results from the registered Interchain Queries"),(0,a.kt)("h3",{id:"get-results-from-kv-queries"},"Get results from KV-queries"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum QueryMsg {\n    GetRegisteredQuery { query_id: u64 },\n    Balance { query_id: u64 },\n}\n\n#[cfg_attr(not(feature = "library"), entry_point)]\npub fn query(deps: Deps<NeutronQuery>, env: Env, msg: QueryMsg) -> NeutronResult<Binary> {\n    match msg {\n        QueryMsg::GetRegisteredQuery { query_id } => {\n            Ok(to_binary(&get_registered_query(deps, query_id)?)?)\n        },\n        QueryMsg::Balance { query_id } => Ok(to_binary(&query_balance(deps, env, query_id)?)?),\n        QueryMsg::GetTransfersNumber {} => query_transfers_number(deps),\n    }\n}\n')),(0,a.kt)("p",null,"In the snippet above we create the ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryMsg")," enum that contains three msgs: ",(0,a.kt)("inlineCode",{parentName:"p"},"GetRegisteredQuery"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Balance"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"GetTransfersNumber"),", and a ",(0,a.kt)("inlineCode",{parentName:"p"},"query"),"\nentrypoint which handles the defined query msgs. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the handler of ",(0,a.kt)("inlineCode",{parentName:"li"},"GetRegisteredQuery")," uses ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron-sdk/blob/a47bfac69667da57f8bf6ea81c9f16240e145c6d/packages/neutron-sdk/src/interchain_queries/queries.rs#L51"},"built-in SDK helper")," ",(0,a.kt)("inlineCode",{parentName:"li"},"get_registered_query")," to get all the information about\nany registered query by its id;"),(0,a.kt)("li",{parentName:"ul"},"the handler of ",(0,a.kt)("inlineCode",{parentName:"li"},"Balance")," is much more interesting. It uses ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron-sdk/blob/a47bfac69667da57f8bf6ea81c9f16240e145c6d/packages/neutron-sdk/src/interchain_queries/queries.rs#L87"},"built-in SDK helper")," ",(0,a.kt)("inlineCode",{parentName:"li"},"query_balance")," to query interchain balance:"),(0,a.kt)("li",{parentName:"ul"},"the handler of ",(0,a.kt)("inlineCode",{parentName:"li"},"GetTransfersNumber")," will be below in the ",(0,a.kt)("a",{parentName:"li",href:"#get-results-from-tx-queries"},"section about tx queries handling"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn query_balance(\n    deps: Deps<NeutronQuery>,\n    _env: Env,\n    registered_query_id: u64,\n) -> NeutronResult<BalanceResponse> {\n    // get info about the query\n    let registered_query = get_registered_query(deps, registered_query_id)?;\n    // check that query type is KV\n    check_query_type(registered_query.registered_query.query_type, QueryType::KV)?;\n    // reconstruct a nice Balances structure from raw KV-storage values\n    let balances: Balances = query_kv_result(deps, registered_query_id)?;\n\n    Ok(BalanceResponse {\n        // last_submitted_height tells us when the query result was updated last time (block height)\n        last_submitted_local_height: registered_query\n            .registered_query\n            .last_submitted_result_local_height,\n        balances,\n    })\n}\n")),(0,a.kt)("p",null,"The most import function here is ",(0,a.kt)("inlineCode",{parentName:"p"},"query_kv_result"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Reads submitted raw KV values for Interchain Query with **query_id** from the storage and reconstructs the result\npub fn query_kv_result<T: KVReconstruct>(\n    deps: Deps<NeutronQuery>,\n    query_id: u64,\n) -> NeutronResult<T> {\n    let registered_query_result = get_interchain_query_result(deps, query_id)?;\n\n    KVReconstruct::reconstruct(&registered_query_result.result.kv_results)\n}\n")),(0,a.kt)("p",null,"It is built-in into SDK, and it uses ",(0,a.kt)("inlineCode",{parentName:"p"},"KVReconstruct")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-sdk/blob/a47bfac69667da57f8bf6ea81c9f16240e145c6d/packages/neutron-sdk/src/interchain_queries/types.rs#L148"},"trait"),"\nto reconstruct KV-storage values into a nice structure.\nMeaning any structure that implements ",(0,a.kt)("inlineCode",{parentName:"p"},"KVReconstruct")," trait can be used with ",(0,a.kt)("inlineCode",{parentName:"p"},"query_kv_result")," helper.\nIn our case we want to reconstruct ",(0,a.kt)("inlineCode",{parentName:"p"},"Balances")," from KV-values. ",(0,a.kt)("inlineCode",{parentName:"p"},"Balances")," is a build-in SDK structure and it already ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-sdk/blob/a47bfac69667da57f8bf6ea81c9f16240e145c6d/packages/neutron-sdk/src/interchain_queries/types.rs#L176"},"implements"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"KVReconstruct")," trait, so no additional functionality is required from developers, you can just import and use it as it is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n/// A structure that can be reconstructed from **StorageValues**'s for the **Balance Interchain Query**.\n/// Contains coins that are held by some account on remote chain.\npub struct Balances {\n    pub coins: Vec<Coin>,\n}\n\nimpl KVReconstruct for Balances {\n    fn reconstruct(storage_values: &[StorageValue]) -> NeutronResult<Balances> {\n        let mut coins: Vec<Coin> = Vec::with_capacity(storage_values.len());\n\n        for kv in storage_values {\n            let balance: CosmosCoin = CosmosCoin::decode(kv.value.as_slice())?;\n            let amount = Uint128::from_str(balance.amount.as_str())?;\n            coins.push(Coin::new(amount.u128(), balance.denom));\n        }\n\n        Ok(Balances { coins })\n    }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Neutron SDK is shipped with a lot of query structures to reconstruct different Interchain Queries (you can find a full list ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-sdk/blob/main/packages/neutron-sdk/src/interchain_queries/types.rs"},"here")," by looking for structs implementing the KVReconstruct trait).\nBut if you don't find some particular structure in the SDK, you can always implement your own using implementations from SDK as a reference.\nAll you need to do is just implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"KVReconstruct")," trait for your structure, and after that you can easily use this with ",(0,a.kt)("inlineCode",{parentName:"p"},"query_kv_result")," helper like this:\n",(0,a.kt)("inlineCode",{parentName:"p"},"let response: YourStructure = query_kv_result(deps, query_id)?"))),(0,a.kt)("p",null,"Sometimes you might want to get KV Interchain Queries result immediately after it was published by the ",(0,a.kt)("a",{parentName:"p",href:"/relaying/icq-relayer"},"ICQ relayer"),".\nThat's why we've implemented ",(0,a.kt)("strong",{parentName:"p"},"KV Queries Callbacks"),", which allows you to get a callback in your contract with the query result when the relayer submits it.\nKV callbacks are implemented via ",(0,a.kt)("strong",{parentName:"p"},"Sudo")," calls in your smart-contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[entry_point]\npub fn sudo(deps: DepsMut<NeutronQuery>, env: Env, msg: SudoMsg) -> NeutronResult<Response> {\n    match msg {\n        SudoMsg::KVQueryResult { query_id } => sudo_kv_query_result(deps, env, query_id),\n        _ => Ok(Response::default()),\n    }\n}\n\n/// sudo_kv_query_result is the contract\'s callback for KV query results. Note that only the query\n/// id is provided, so you need to read the query result from the state.\npub fn sudo_kv_query_result(\n    deps: DepsMut<NeutronQuery>,\n    env: Env,\n    query_id: u64,\n) -> NeutronResult<Response> {\n    deps.api.debug(\n        format!(\n            "WASMDEBUG: sudo_kv_query_result received; query_id: {:?}",\n            query_id,\n        )\n            .as_str(),\n    );\n\n    Ok(Response::default())\n}\n')),(0,a.kt)("p",null,"In the snippet above we implement a ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," entrypoint to catch all the ",(0,a.kt)("inlineCode",{parentName:"p"},"KVQueryResult")," callbacks, and we define\n",(0,a.kt)("inlineCode",{parentName:"p"},"sudo_kv_query_result")," handler to process the callback. In this particular handler we don't anything, but print some debug info to the log.\nBut there could be any logic you want."),(0,a.kt)("h3",{id:"get-results-from-tx-queries"},"Get results from TX-queries"),(0,a.kt)("p",null,"Unlike KV-queries result, TX-queries results are not saved to the module storage by the Neutron ICQ Module (on Cosmos-SDK level).\nTX-queries are supported only in ",(0,a.kt)("em",{parentName:"p"},"callback way"),", so to get result from TX-queries you have to work with ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," callbacks and save results to the storage by yourself if you need:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[entry_point]\npub fn sudo(deps: DepsMut<NeutronQuery>, env: Env, msg: SudoMsg) -> NeutronResult<Response> {\n    match msg {\n        SudoMsg::TxQueryResult {\n            query_id,\n            height,\n            data,\n        } => sudo_tx_query_result(deps, env, query_id, height, data)\n    }\n}\n\n/// sudo_check_tx_query_result is an example callback for transaction query results that stores the\n/// deposits received as a result on the registered query in the contract\'s state.\npub fn sudo_tx_query_result(\n    deps: DepsMut<NeutronQuery>,\n    _env: Env,\n    query_id: u64,\n    _height: u64,\n    data: Binary,\n) -> NeutronResult<Response> {\n    // Decode the transaction data\n    let tx: TxRaw = TxRaw::decode(data.as_slice())?;\n    let body: TxBody = TxBody::decode(tx.body_bytes.as_slice())?;\n\n    // Get the registered query by ID and retrieve the raw query string\n    let registered_query: QueryRegisteredQueryResponse =\n        get_registered_query(deps.as_ref(), query_id)?;\n    let transactions_filter = registered_query.registered_query.transactions_filter;\n\n    #[allow(clippy::match_single_binding)]\n    // Depending of the query type, check the transaction data to see whether is satisfies\n    // the original query. If you don\'t write specific checks for a transaction query type,\n    // all submitted results will be treated as valid.\n    match registered_query.registered_query.query_type {\n        _ => {\n            // For transfer queries, query data looks like `[{"field:"transfer.recipient", "op":"eq", "value":"some_address"}]`\n            let query_data: Vec<TransactionFilterItem> =\n                serde_json_wasm::from_str(transactions_filter.as_str())?;\n\n            let recipient = query_data\n                .iter()\n                .find(|x| x.field == RECIPIENT_FIELD && x.op == TransactionFilterOp::Eq)\n                .map(|x| match &x.value {\n                    TransactionFilterValue::String(v) => v.as_str(),\n                    _ => "",\n                })\n                .unwrap_or("");\n\n            let deposits = recipient_deposits_from_tx_body(body, recipient)?;\n            // If we didn\'t find a Send message with the correct recipient, return an error, and\n            // this query result will be rejected by Neutron: no data will be saved to state.\n            if deposits.is_empty() {\n                return Err(NeutronError::Std(StdError::generic_err(\n                    "failed to find a matching transaction message",\n                )));\n            }\n\n            let mut stored_transfers: u64 = TRANSFERS.load(deps.storage).unwrap_or_default();\n            stored_transfers += deposits.len() as u64;\n            TRANSFERS.save(deps.storage, &stored_transfers)?;\n\n            check_deposits_size(&deposits)?;\n            let mut stored_deposits: Vec<Transfer> = RECIPIENT_TXS\n                .load(deps.storage, recipient)\n                .unwrap_or_default();\n            stored_deposits.extend(deposits);\n            RECIPIENT_TXS.save(deps.storage, recipient, &stored_deposits)?;\n            Ok(Response::new())\n        }\n    }\n}\n')),(0,a.kt)("p",null,"In the snippet above we implement a ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," entrypoint to catch all the ",(0,a.kt)("inlineCode",{parentName:"p"},"TXQueryResult")," callbacks, and we define\n",(0,a.kt)("inlineCode",{parentName:"p"},"sudo_tx_query_result")," handler to process the callback.\nIn the handler we decode the transaction data at first, try to parse messages in the transaction, check that transaction really satisfies our defined filter\nand do some business logic (in our case we just save transfer to the storage and increase the total incoming transfers number)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"IMPORTANT NOTICE:")," It's necessary to check that the result transaction satisfies your filter. Although Neutron guarantees that transaction is valid\n(meaning transaction is really included in a block on remote chain, it was executed successfully, signed properly, etc.), Neutron ",(0,a.kt)("em",{parentName:"p"},"can not")," guarantee you\nthat result transaction satisifies defined filter. You must always check this in your contract!")),(0,a.kt)("p",null,"Just like with the KV query (the Balance one), TX query results can be retrieved by the contract state. In this respect there is no difference between query types, it's only matter of the way you design your contracts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Returns the number of transfers made on remote chain and queried with ICQ\nfn query_transfers_number(deps: Deps<NeutronQuery>) -> NeutronResult<Binary> {\n    let transfers_number = TRANSFERS.load(deps.storage).unwrap_or_default();\n    Ok(to_binary(&GetTransfersAmountResponse { transfers_number })?)\n}\n")),(0,a.kt)("h2",{id:"4-manage-registered-interchain-queries"},"4. Manage registered Interchain Queries"),(0,a.kt)("p",null,"In some cases you may need to update Interchain Queries parameters (update period, KV-keys, tx filter, etc) or even remove a\nquery from the Neutron.\nNeutron allows you to do these actions via ",(0,a.kt)("inlineCode",{parentName:"p"},"Update")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Remove")," messages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use neutron_sdk::bindings::msg::NeutronMsg;\n\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum ExecuteMsg {\n    ...\n    UpdateInterchainQuery {\n        query_id: u64,\n        new_keys: Option<Vec<KVKey>>,\n        new_update_period: Option<u64>,\n    },\n    RemoveInterchainQuery {\n        query_id: u64,\n    },\n    ...\n}\n\n#[cfg_attr(not(feature = "library"), entry_point)]\npub fn execute(\n    deps: DepsMut<NeutronQuery>,\n    env: Env,\n    _: MessageInfo,\n    msg: ExecuteMsg,\n) -> NeutronResult<Response<NeutronMsg>> {\n    match msg {\n        ...\n        ExecuteMsg::UpdateInterchainQuery {\n            query_id,\n            new_keys,\n            new_update_period,\n        } => update_interchain_query(query_id, new_keys, new_update_period),\n        ExecuteMsg::RemoveInterchainQuery { query_id } => remove_interchain_query(query_id),\n        ...\n    }\n}\n\npub fn update_interchain_query(\n    query_id: u64,\n    new_keys: Option<Vec<KVKey>>,\n    new_update_period: Option<u64>,\n) -> NeutronResult<Response<NeutronMsg>> {\n    let update_msg = NeutronMsg::update_interchain_query(query_id, new_keys, new_update_period);\n    Ok(Response::new().add_message(update_msg))\n}\n\npub fn remove_interchain_query(query_id: u64) -> NeutronResult<Response<NeutronMsg>> {\n    let remove_msg = NeutronMsg::remove_interchain_query(query_id);\n    Ok(Response::new().add_message(remove_msg))\n}\n')),(0,a.kt)("p",null,"In the snippet above we add ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateInterchainQuery")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoveInterchainQuery")," to our ",(0,a.kt)("inlineCode",{parentName:"p"},"ExecuteMsg")," enum and define corresponding\nhandlers ",(0,a.kt)("inlineCode",{parentName:"p"},"update_interchain_query")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"remove_interchain_query")," which, in short, just issue proper ",(0,a.kt)("a",{parentName:"p",href:"/neutron/interchain-queries/messages"},"Neutron msgs")," to update and remove interchain query.\nIn a real world scenario such handlers must have ownership checks."))}d.isMDXComponent=!0}}]);