import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: 'Return details about your account',
  params: [
    {
      type: 'string',
      name: 'mode',
      optional: false,
      description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
    },
  ],
};

export interface types {
  (mode: 'osu' | 'fruits' | 'mania' | 'taiko'): Promise<response>;
};

export interface response {
  avatar_url: string;
  country_code: string;
  default_group: string;
  id: number;
  is_active: boolean;
  is_bot: boolean;
  is_deleted: boolean;
  is_online: boolean;
  is_supporter: boolean;
  last_visit: string;
  pm_friends_only: boolean;
  profile_colour: string;
  username: string;
  cover_url: string;
  discord: string;
  has_supported: boolean;
  interests: string;
  join_date: string;
  kudosu: {
    total: number;
    available: number;
  };
  location: string;
  max_blocks: number;
  max_friends: number;
  occupation: string;
  playmode: string;
  playstyle: string[];
  post_count: number;
  profile_order: string[];
  title: string;
  title_url: string;
  twitter: string;
  website: string;
  country: {
    code: string;
    name: string;
  };
  cover: {
    custom_url: string;
    url: string;
    id: string;
  };
  is_restricted: boolean;
  account_history: [];
  active_tournament_banner: string;
  badges: [];
  beatmap_playcounts_count: number;
  comments_count: number;
  favourite_beatmapset_count: number;
  follower_count: number;
  graveyard_beatmapset_count: number;
  groups: [];
  guest_beatmapset_count: number;
  loved_beatmapset_count: number;
  mapping_follower_count: number;
  monthly_playcounts: {
    start_date: string;
    count: number;
  }[];
  page: {
    html: string;
    raw: string;
  };
  pending_beatmapset_count: number;
  previous_usernames: [];
  ranked_beatmapset_count: number;
  replays_watched_counts: {
    start_date: string;
    count: number;
  }[];
  scores_best_count: number;
  scores_first_count: number;
  scores_pinned_count: number;
  scores_recent_count: number;
  statistics: {
    level: {
      current: number;
      progress: number;
    };
    global_rank: number;
    pp: number;
    ranked_score: number;
    hit_accuracy: number;
    play_count: number;
    play_time: number;
    total_score: number;
    total_hits: number;
    maximum_combo: number;
    replays_watched_by_others: number;
    is_ranked: boolean;
    grade_counts: {
      ss: number;
      ssh: number;
      s: number;
      sh: number;
      a: number;
    };
    country_rank: number;
    rank: {
      country: number;
    };
  };
  support_level: number;
  user_achievements: {
    achieved_at: string;
    achievement_id: number;
  }[];
  rankHistory: {
    mode: string;
    data: number[];
  };
  rank_history: {
    mode: string;
    data: number[];
  };
  ranked_and_approved_beatmapset_count: number;
  unranked_beatmapset_count: number;
}



const name: types = async (mode) => {
  const data = await request(`me/${mode}`, {
    method: 'GET',
  });

  return data;
};


export default name;