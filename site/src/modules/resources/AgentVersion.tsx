import type { WorkspaceAgent } from "api/typesGenerated";
import type { FC } from "react";
import { agentVersionStatus, getDisplayVersionStatus } from "utils/workspace";
import { AgentOutdatedTooltip } from "./AgentOutdatedTooltip";

interface AgentVersionProps {
	agent: WorkspaceAgent;
	serverVersion: string;
	serverAPIVersion: string;
	onUpdate: () => void;
}

export const AgentVersion: FC<AgentVersionProps> = ({
	agent,
	serverVersion,
	serverAPIVersion,
	onUpdate,
}) => {
	const { status } = getDisplayVersionStatus(
		agent.version,
		serverVersion,
		agent.api_version,
		serverAPIVersion,
	);

	if (status === agentVersionStatus.Updated) {
		return null;
	}

	return (
		<AgentOutdatedTooltip
			agent={agent}
			serverVersion={serverVersion}
			status={status}
			onUpdate={onUpdate}
		/>
	);
};
