
const longestCommonPrefix = (strs) => 
  strs.sort((first, second) => first.length - second.length)[0].split("")
    .reduce((acc, char) => {
        let { longestCommonPrefix, nextPrefix } = acc;
        nextPrefix += char;
        const matched = strs.reduce((acc, str) => acc && str.slice(0, nextPrefix.length) === nextPrefix, true);
        if (matched && longestCommonPrefix.length < nextPrefix.length) {
          longestCommonPrefix = nextPrefix;
        }
        return { longestCommonPrefix, nextPrefix };
    }, { longestCommonPrefix: "", nextPrefix: "" })
    .longestCommonPrefix;
//fl
console.log(longestCommonPrefix(["flower","flow","flight"]));    